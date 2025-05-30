export type TypeHubSpotForm = {
  curso?: InfoCourse;
  cursoModalidade?: string;
  formTitle: string;
  idSelers?: string;
  onFormSubmit?: () => void;
  afterSending?: () => void;
  formId: string;
  modelCourse?: string;
  redirect?: boolean;
};
type InfoCourse = {
  name?: string;
  nameAlias?: string;
  area?: string;
  areaAlias?: string;
  modality?: string;
};
