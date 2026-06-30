"""Pydantic models mirroring packages/contracts/schemas."""

from datetime import datetime
from typing import Literal

from pydantic import BaseModel, Field


ReportContext = Literal['individual', 'team', 'leadershipteam', 'company', 'demo']


class ScoredQuestion(BaseModel):
    id: int
    score: float
    weighting: float


class ScoredElement(BaseModel):
    id: int
    name: str
    group_id: int
    score: float
    weighted_score: float
    questions: list[ScoredQuestion]
    paragraph: str


class WeightingsApplied(BaseModel):
    wtg_2: float
    wtg_3: float


class ScoreResult(BaseModel):
    em_score: float
    gp_score: float | None = None
    customer_score: float | None = None
    elements: list[ScoredElement]
    group_scores: dict[str, float]
    weightings_applied: WeightingsApplied


class ScoreRequest(BaseModel):
    answers: dict[str, float]
    context: ReportContext
    questionnaire_id: int
    customer_score: float = 0.0


class SubmissionCompletedEvent(BaseModel):
    event: Literal['submission.completed'] = 'submission.completed'
    submission_id: int
    user_id: int
    questionnaire_id: int
    occurred_at: datetime
