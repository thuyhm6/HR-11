/** Khớp với com.ait.hrm.empinfo.dto.PhotoImportResultDto (backend). */
export interface PhotoImportResult {
  fileName: string;
  empId: string | null;
  personId: string | null;
  localName: string | null;
  success: boolean;
  errorMessage: string | null;
}
