export type UserType = "mentor" | "student";

export interface IHTTPMessage {
  status_code: number;
  message: string;
}

export interface IEndpointTypes {
  oauth: {
    request: {
      code: string;
      type: UserType;
    };
    response: {
      email: string;
      is_new_user: boolean;
      jwt: string;
      name: string;
      type: UserType;
      username: string;
      college: string | undefined;
    };
  };
  profile: {
    request: null;
    response: {
      name: string;
      username: string;
      email: string;
      type: UserType;
    };
  };
  "student/form": {
    request: {
      username: string;
      name: string;
      email: string;
      college: string;
    };
    response: IHTTPMessage;
  };
  "student/dashboard": {
    request: null;
    response: {
      name: string;
      username: string;
      college: string;
      passed_mid_evals: boolean;
      passed_end_evals: boolean;
      blog_link: string;
      commit_count: number;
      pull_count: number;
      lines_added: number;
      lines_removed: number;
      languages_used: string[];
      pulls: string[];
      projects_worked: { name: string; repo_link: string }[];
    };
  };
  "mentor/form": {
    request: {
      username: string;
      name: string;
      email: string;
    };
    response: IHTTPMessage;
  };
  project: {
    request: IProjectReg | IProjectEdit;
    response: IProject[];
  };
  "mentor/dashboard": {
    request: null;
    response: {
      name: string;
      username: string;
      email: string;
      projects: IProjectDashboardInfo[];
      students: IStudentInfo[];
    };
  };
  "student/bloglink": {
    request: {
      username: string;
      blog_link: string;
    };
    response: null;
  };
  [route: `project/${number}`]: {
    request: null;
    response: IProject;
  };
}

export interface IMentor {
  name: string;
  username: string;
}

export interface IStudentInfo {
  name: string;
  username: string;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  tags: string[];
  repo_link: string;
  comm_channel: string;
  readme_link: string;
  mentor: IMentor;
  secondary_mentor: IMentor;
}

interface IProjectReg {
  name: string;
  description: string;
  tags: string[];
  repo_link: string;
  comm_channel: string;
  readme_link: string;
  secondary_mentor_username: string;
  mentor_username: string;
}

interface IProjectEdit extends IProjectReg {
  id: number;
}

export interface IProjectDashboardInfo extends IProject {
  project_status: boolean;
  commit_count: number;
  pull_count: number;
  lines_added: number;
  lines_removed: number;
  pulls: string[];
}

export interface IProjectTags {
  [key: string]: string;
}