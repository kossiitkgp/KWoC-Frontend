import { useEffect, useState } from "react";
import Form from "./Form";
import { useAuthContext } from "../util/auth";
import { makeRequest } from "../util/backend";
import { useNavigate } from "react-router-dom";
import { IStudentReportLink } from "../util/types";
import SpinnerLoader from "./SpinnerLoader";

function ReportForm() {
  const authContext = useAuthContext();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [reportLink, setReportLink] = useState<IStudentReportLink | null>(null);

  useEffect(() => {
    if (!authContext.isAuthenticated) {
      navigate("/");
    }
  });

  useEffect(() => {
    setLoading(true);

    makeRequest(`student/bloglink`, "get", null, authContext.jwt)
      .then((response) => {
        if (response.is_ok) {
          setReportLink(response.response);
        } else {
          setError(response.response.message);
        }

        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setError("An unexpected error occurred.");
        setLoading(false);
      });
  }, [navigate, authContext]);

  const fields: any = {
    report: {
      field: "Submission Link",
      placeholder: "https://medium.com/my-report",
      type: "url",
      required: true,
    },
  };

  return (
    <>
      {reportLink !== null || error !== null ? (
        <Form
          title="Report Submission Form"
          error={error}
          info={info}
          loading={loading}
          disabled={loading}
          staticMessage="Note: The name on your profile will be used for the certificate. So change it accordingly"
          fields={fields}
          onSubmit={async (responses) => {
            setError(null);
            setInfo(null);

            try {
              setLoading(true);
              const res = await makeRequest(
                `student/bloglink`,
                "post",
                {
                  ...responses,
                  report_link: responses.report,
                },
                authContext.jwt,
              );

              if (!res.is_ok) setError(res.response.message);
              else {
                setInfo("Report submitted successfully!");
              }

              setLoading(false);
              return res.is_ok;
            } catch (e) {
              setError("Error sending the request. Please try again later.");
              setLoading(false);

              console.log(e);
              return false;
            }
          }}
        />
      ) : (
        <div className="pt-32">
          <SpinnerLoader />
        </div>
      )}
    </>
  );
}

export default ReportForm;
