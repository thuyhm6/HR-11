/** Tương ứng ArAffirmPostDto.java - 1 vai trò người duyệt và cấp duyệt tương ứng. */
export interface ArAffirmPostRow {
  duty: string;
  dutyName: string;
  affirmLevel: number;
  updatedByName: string;
  /** DD/MM/YYYY */
  updateDate: string;
}

export interface ArAffirmPostPayload {
  duty: string;
  affirmLevel: number;
}

export interface ArAffirmPostActionResult {
  success: boolean;
  message: string;
}
