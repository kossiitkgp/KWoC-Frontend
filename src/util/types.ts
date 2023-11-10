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
}

export interface ProjectType {
  username: string;
  projectName: string;
  linesAdded: number;
  linesRemoved: number;
  nCommit: number;
  nPull: number;
}

export interface IProjectCard {
  name: string;
  description: string;
  tags: string[];
  mentor: string;
}

export interface IProjectTags {
  [key: string]: string;
}
