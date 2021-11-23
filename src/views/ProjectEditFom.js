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

async function getNewReadme(repo, branch) {
  if (repo.slice(-1) === "/") {
    repo = repo.slice(0, -1);
  }
  const repoName = repo.replace("https://github.com/", "");

  const endpoint = `https://api.github.com/repos/${repoName}/readme?ref=${branch.value}`;
  const headers = {
    Accept: "application/vnd.github.v3+json",
    // recommended by Github
  };

  const res = await axios.get(endpoint, { headers: headers });
  const decodedReadme = atob(res.data["content"]);
  return decodedReadme;
}
async function getRepoBranches(repo) {
  if (repo.slice(-1) === "/") {
    repo = repo.slice(0, -1);
  }
  const repoName = repo.replace("https://github.com/", "");
  const endpoint = `https://api.github.com/repos/${repoName}/branches`;
  const res = await axios.get(endpoint);
  const branches_opts = res.data.map((item) => {
    return { value: item["name"], label: item["name"] };
  });

  return branches_opts;
}

export default function ProjectEditForm() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const [tags, setTags] = useState([]);
  const [showTags, setShowTags] = useState(false);

  const [branch, setBranch] = useState("");
  const [showBranch, setShowBranch] = useState(false);

  const [readme, setReadme] = useState("");
  const [branchOpts, setBranchOpts] = useState([]);

  const [repoLink, setRepoLink] = useState("");

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
    const data = {
      id: parseInt(project_id),
    };
    // TODO Fetch existing details from the project
    const PROJECT_DETAILS_ENDPOINT = `${BACKEND_URL}/project/details`;

    const headers = {
      Bearer: localStorage.getItem("mentor_jwt"),
    };
    axios
      .post(PROJECT_DETAILS_ENDPOINT, data, { headers })
      .then((res) => {
        const data = res.data;
        if (res.status == 200) {
          setName(data["name"]);
          setDesc(data["desc"]);

          setBranch({ value: data["branch"], label: data["branch"] });
          getRepoBranches(data["repo_link"])
            .then((res) => setBranchOpts(res))
            .catch((err) =>
              console.log("err in getting branches from Github", err)
            );
          setShowBranch(true);

          const tags_arr = JSON.parse(data["tags"]);
          const tags_map_arr = tags_arr.map((item) => {
            return { label: item, value: item };
          });
          setTags(tags_map_arr);
          setShowTags(true);

          setRepoLink(data["repo_link"]);
        } else if (res.status == 403) {
          alert("You cannot edit this project");
        } else {
          alert("Server error");
          console.log("res ", res);
        }
      })
      .catch((err) => {
        console.log("error in Project details fetch");
        alert("Server Error, Try again");
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

  async function refetchREADME() {
    const newReadme = await getNewReadme(repoLink, branch);
    setReadme(newReadme);
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

      {showTags && (
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
      )}

      {showBranch && (
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
            defaultValue={branch}
            placeholder="Select Branch"
          />
        </div>
      )}

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
