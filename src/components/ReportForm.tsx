import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "./Form";
import { useAuthContext } from "../util/auth";
import { makeRequest } from "../util/backend";

function ReportForm({ currentLink }: { currentLink: string }) {
  const authContext = useAuthContext();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(currentLink !== "" ? "Submitted" : null);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Form
      title="Report Submission Form"
      error={error}
      success={success}
      info={null}
      loading={loading}
      disabled={loading}
      staticMessage={
        <ul>
          <li className="mb-1 text-lg text-yellow-500">
            Note: Your profile name will be displayed on the certificate. Please
            update it{" "}
            <Link
              className="hover:underline text-primary-500 hover:text-primary-600"
              to={authContext.formLink}
            >
              here
            </Link>{" "}
            if required.
          </li>
          <li>
            The report should include a list of projects you worked on, a list
            of pull requests you have created, along with links, and a concise
            yet informative summary of your work and your learnings.
          </li>
        </ul>
      }
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
        setSuccess(null);

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
            setSuccess("Report submitted successfully!");
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
