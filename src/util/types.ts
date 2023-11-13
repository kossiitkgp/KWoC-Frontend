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
  "mentor/form": {
    request: {
      username: string;
      name: string;
      email: string;
    };
    response: IHTTPMessage;
  };
  project: {
    request: IProjectReg;
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

export interface IProjectDashboardInfo {
  name: string;
  description: string;
  t;
  repo_link: string;
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
