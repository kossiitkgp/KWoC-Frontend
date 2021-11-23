import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import ReactTooltip from "react-tooltip";
import InfoIcon from "../assets/info.svg";
import { BACKEND_URL } from "../constants";
import Tags from "../data/tags.js";

const options = Tags.map((item) => {
  return { value: item, label: item };
});

export default function ProjectEditForm() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [tags, setTags] = useState([]);
  const [branch, setBranch] = useState("");
  const [readme, setReadme] = useState("");

  const [branchOpts, setBranchOpts] = useState([]);

  useEffect(() => {
    // TODO - this should be done better
    // check if mentor is logged in
    if (
      localStorage.getItem("mentor_jwt") === null ||
      localStorage.getItem("mentor_jwt") === undefined
    )
      window.history.push("/");

    const window_url_split = window.location.href.split("/");
    const project_id = window_url_split[window_url_split.length - 1];
    console.log("project id is ", project_id);
    const data = {
      id: project_id,
    };
    // TODO Fetch existing details from the project
    const PROJECT_DETAILS_ENDPOINT = `${BACKEND_URL}/project/details`;
    console.log("sending request to ", PROJECT_DETAILS_ENDPOINT);
    fetch(PROJECT_DETAILS_ENDPOINT, {
      method: "POST",
      headers: {
        Bearer: localStorage.getItem("mentor_jwt"),
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          console.log("project detials i got from bckend ,", res);
        } else {
          alert("Cannot Edit form. Please login from your mentor ID");
        }
      })
      .catch((err) => {
        alert("Server Error Try again");
        console.log(err);
      });
  }, []);

  function handleChangeTagsField(tags, action) {
    const selectedTags = tags.map((item) => item.value);
    setTags(selectedTags);
  }

  function handleChangeBranchField(tag, action) {
    if (tag !== null) {
      const selectedBranch = tag.value;
      setBranch(selectedBranch);
    }
  }

  async function refetchREADME(repo) {
    // TODO write it
    return "todo";
  }

  async function showBranchField(repo) {
    const endpoint = `https://api.github.com/repos/${repo}/branches`;
    const res = await axios.get(endpoint);
    const branches_opts = res.data.map((item) => {
      return { value: item["name"], label: item["name"] };
    });
    setBranchOpts(branches_opts);
    // TODO based on response this should be set.
    // setBranch(branches_opts[0]["value"]); // setting the first as the default selected branch
  }

  return (
    <div className="box">
      <div className="field">
        <label className="label">Project Name</label>
        <div className="control">
          <input
            className="input is-rounded"
            type="text"
            placeholder="Edit name of your project"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <input
            className="input is-rounded"
            type="text"
            placeholder="Edit name of your project"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Tags for the project</label>
        <div className="control">
          <CreatableSelect
            isMulti
            isClearable
            onChange={handleChangeTagsField}
            options={options}
            defaultValue={tags}
            placeholder="Select or Create Tags"
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Select Branch for stats</label>
        <img
          alt=""
          src={InfoIcon}
          data-tip={`We put up a stats board for encouragement, by fetching the contribution data of all students using Github API. 
         <br/>Please select the branch on which students should be contributing. 
         <br/> We will be fetching the contributions data from the branch you have specified. 
         <br/> You can also change the branch in middle of KWoC`}
        />
        <ReactTooltip place="bottom" type="info" effect="float" html />
        <Select
          isClearable
          isSearchable
          onChange={handleChangeBranchField}
          options={branchOpts}
          //   defaultValue={branchOpts[0]}
          placeholder="Select Branch"
        />
      </div>

      <div>
        <a
          className="button is-rounded is-fullWidth column is-full"
          onClick={refetchREADME}
        >
          Re-Fetch README
        </a>
      </div>
    </div>
  );
}
