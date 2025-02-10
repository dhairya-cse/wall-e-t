# Wall-e-t

Wall-e-t is a proof-of-concept (PoC) exploring the use of chat-based banking interfaces powered by Large Language Models (LLMs).

## Overview

With advancements in AI, conversational agents are becoming an integral part of everyday life and will continue to evolve. In banking, such interfaces can enhance user experience by allowing users to express their intentions in natural language while maintaining security, privacy, and accuracy.

Wall-e-t maps user messages to predefined banking actions. For sensitive actions, it keeps a human in the loop by asking for confirmation (e.g., OTP verification) and ensures AI responses are controlled by using templated messages.

## Tasks

- [x] Map user messages to predefined actions.
- [ ] Implement human-in-the-loop confirmation for sensitive operations (withdrawals, transfers).
- [ ] Handle missing information by prompting users to provide necessary details.

## Future Possibilities

Since this is an exploratory project, the focus is on a minimal proof-of-concept. However, future improvements could include:

- **Better UI and personalization** – Improve response rendering and tailor interactions based on user context.
- **Form handling in chat** – Allow the chat interface to send forms and process user inputs seamlessly.
- **Chaining multiple actions** – Enable users to request multiple operations in a single message, e.g., _"What’s my current balance and what will it be in 3 years?"_
- **Multi-modal interactions** – Support voice input and potentially images/videos, along with AI-generated voice responses.

---

*This README was refined using AI, reinforcing the need for a seamless conversational banking experience.*
