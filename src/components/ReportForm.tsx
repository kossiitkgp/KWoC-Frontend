import { useState } from "react";
import Form from "./Form";
import { useAuthContext } from "../util/auth";
import { makeRequest } from "../util/backend";

function ReportForm({ currentLink }: { currentLink: string }) {
  const authContext = useAuthContext();
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Form
      title="Report Submission Form"
      error={error}
      info={info}
      loading={loading}
      disabled={loading}
      staticMessage="Note: The name on your profile will be displayed on the certificate. Please update it if necessary."
      fields={{
        report: {
          field: "Submission Link",
          placeholder: "https://medium.com/my-report",
          type: "url",
          defaultValue: currentLink,
          required: true,
        },
      }}
      onSubmit={async (responses) => {
        setError(null);
        setInfo(null);

        try {
          setLoading(true);
          const res = await makeRequest(
            "student/bloglink",
            "post",
            {
              username: authContext.userData.username,
              blog_link: responses.report,
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
  );
}

export default ReportForm;
