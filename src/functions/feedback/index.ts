import type { Handler } from "@netlify/functions";
import type { Response } from "@netlify/functions/src/function/response";
import { submitFeedback as submitDocsGuidesFeedback } from "./_docs-guides";
import { submitFeedback as submitExtensionFeedback } from "./_browser-extension";

const feedbackTypeToFunctionMap: {
  [type: string]: (body: string) => Promise<Response>;
} = {
  docs: submitDocsGuidesFeedback,
  guides: submitDocsGuidesFeedback,
  "browser-extension": submitExtensionFeedback,
  undefined: () => {
    throw new Error("Pleae provide a feedback type.");
  },
};

const handler: Handler = (event, _, callback) => {
  console.log(JSON.stringify(event.body));
  const submitFeedback = feedbackTypeToFunctionMap[JSON.parse(event.body).type];

  submitFeedback(event.body)
    .then((response) => callback(null, response))
    .catch((error) => {
      console.error(error);
      callback(error, null);
    });
};

export { handler };
