import { useState } from "react";
import Form from "../components/Form";
import { useAuthContext } from "../util/auth";
import { useNavigate } from "react-router-dom";
import { makeRequest } from "../util/backend";

function BlogForm() {
  const authContext = useAuthContext();
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fields: any = {
    blog: {
      field: "Submission Link",
      placeholder: "",
      type: "url",
      required: true,
    },
  };

  return (
    <>
      <Form
        title="Blog Submission Form"
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
              `${authContext.userData.type}/form`,
              "post",
            );

            if (!res.is_ok) setError(res.response.message);
            else {
                setInfo("Blog submitted successfully!");
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
    </>
  );
}

export default BlogForm;
