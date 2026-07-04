/**
 * @gp/contracts — TypeScript types mirroring JSON Schema.
 */

export type ReportContext =
  | 'individual'
  | 'team'
  | 'leadershipteam'
  | 'company'
  | 'demo';

export interface LikertOption {
  value: number;
  label: 'Never' | 'Rarely' | 'Sometimes' | 'Often' | 'Always';
}

export interface FormQuestion {
  id: number;
  label: string;
  options: LikertOption[];
}

export interface FormElement {
  id: number;
  name: string;
  questions: FormQuestion[];
}

export interface FormPayload {
  questionnaire_id: number;
  group_id: number;
  version: string;
  built_at?: string;
  scale_labels: string[];
  elements: FormElement[];
}

export type AnswersMap = Record<string, number>;

export interface Submission {
  id: number;
  user_id: number;
  questionnaire_id: number;
  status: number;
  answers: AnswersMap;
  reports?: Partial<Record<ReportContext, ReportDocument>>;
  reports_compiled_at?: string;
  config_version?: string;
  created_at?: string;
  updated_at?: string;
}

export interface ScoredQuestion {
  id: number;
  score: number;
  weighting: number;
}

export interface ScoredElement {
  id: number;
  name: string;
  group_id: number;
  score: number;
  weighted_score: number;
  questions: ScoredQuestion[];
  paragraph: string;
}

export interface ScoreResult {
  em_score: number;
  gp_score?: number;
  customer_score?: number;
  elements: ScoredElement[];
  group_scores: Record<string, number>;
  weightings_applied: { wtg_2: number; wtg_3: number };
}

export interface ReportDocument {
  id: string;
  context: ReportContext;
  context_id: number;
  questionnaire_id: number;
  generated_at: string;
  config_version?: string;
  metadata: {
    title: string;
    label: string;
    pronoun: string;
    is_demo?: boolean;
    member_count?: number;
  };
  copy: Record<string, unknown>;
  scores: {
    em_score: number;
    gp_score: number;
    customer_score?: number;
    target_score: number;
    score_text: string;
    compare_score_text: string;
  };
  elements: ScoredElement[];
  comparison?: { compare_elements?: ScoredElement[]; team_elements?: ScoredElement[] };
  graph_config?: Record<string, boolean>;
  permissions?: Record<string, boolean>;
}

export interface SubmissionCompletedEvent {
  event: 'submission.completed';
  submission_id: number;
  user_id: number;
  questionnaire_id: number;
  occurred_at: string;
}
