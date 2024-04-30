export default function toggleQuestion(questionId) {
  setOpenQuestionId(openQuestionId === questionId ? null : questionId);
};