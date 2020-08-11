import { Moment } from "moment";

export type Status = "NEW" | "COMPLETED" | "DELIVERED";

type ProjectWithoutDate = {
  id: number;
  name: string;
  sourceLanguage: string;
  status: Status;
  _links?: {
    self: { href: string };
    project: { href: string };
  };
};

export type FetchedProject = ProjectWithoutDate & {
  dateCreated: string;
  dateDue: string;
  dateUpdated: string;
  targetLanguages: string[];
};

export type Project = ProjectWithoutDate & {
  dateCreated: Moment;
  dateDue: Moment;
  dateUpdated: Moment;
  targetLanguages: string;
};

export type Sort = {
  key: keyof Project;
  direction: "asc" | "desc";
};

export type SavedProject = {
  name: string;
  sourceLanguage: string;
  status: Status;
  dateCreated: string;
  dateDue: string;
  dateUpdated: string;
  targetLanguages: string[];
};

export type Form = {
  name: string;
  sourceLanguage: string;
  targetLanguages: string;
  status: string;
  dateCreated?: string | null;
  dateDue: Date;
};

export type ListReducer = {
  originalList: Project[];
  filteredList: Project[];
  sort: Sort;
  filter: string;
};

export type OverviewReducer = {
  projectStatusesCount: Record<Status, number>;
  overdueProjectsCount: number;
  mostProminentLangs: string[];
};

export type RootState = {
  list: ListReducer;
  overview: OverviewReducer;
  form: Form;
  error: boolean;
};
