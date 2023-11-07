import Form from "../components/Form";

function StudentForm() {
  return <Form
    title="Student Form"
    fields={{
      name: {
        field: 'Name',
        placeholder: 'Jane Doe',
        type: 'text'
      }
    }}
    onSubmit={console.log}
  />
}

export default StudentForm;