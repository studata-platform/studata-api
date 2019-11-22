export const types = `
  type QuickScanQuestionOption {
    _id: String,
    label: String,
    score: Int
  }

  type QuickScanQuestion {
    _id: String,
    question: String,
    body: String,
    target: Int,
    minScore: Int,
    maxScore: Int,
    options: [QuickScanQuestionOption!]
  }

  input QuickScanQuestionOptionInput {
    label: String,
    score: Int
  }
`;

export const queries = `
  quickScanQuestions(target: Int): [QuickScanQuestion!]!
`;

export const mutations = `
  createQuickScanQuestion(
    question: String,
    target: Int,
    body: String,
    minScore: Int,
    maxScore: Int,
    options: [QuickScanQuestionOptionInput]
  ): QuickScanQuestion

  updateQuickScanQuestion(
    _id: String!,
    question: String,
    target: Int,
    body: String,
    minScore: Int,
    maxScore: Int,
    options: [QuickScanQuestionOptionInput]
  ): QuickScanQuestion

  deleteQuickScanQuestion(_id: String!): Boolean
`;
