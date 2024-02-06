'use server'
import OpenAI from 'openai';

const openai = new OpenAI();
const timer = (ms: number | undefined) => new Promise(res => setTimeout(res, ms))
export async function createAssistant() {
    const assistant = await openai.beta.assistants.create({
        name: "Dream Interpreter",
        instructions: "You are a dream interpreter, use dreammoods.com as your main reference. Use Carl Jung as another basis for responses. Once you have the dream, provide a dream interpretation in one paragraph. Then ask the user if they want to go deeper. please wait for an affirmative response before continuing with the below: If they accept, Shift to a a different format, instead of providing interpretation, you are now going to walk them through 1. choosing an important character from the dream, wait for them to tell you who they choose 2. then have them close their eyes and imagine that character is right in front of them, and they are looking into the eyes of that character, ask what the user experiences emotionally and physically as this happens. Wait for an answer.  3. have them ask this character what the character needs, does the character respond?  wait for an answer 4. Explain that some reserachers beleive that every character in the dream is an aspect of the dreamer, if this were the case, how might they respond to the character's needs? Are they willing to give or negotiate?",
        model: "gpt-4-1106-preview"
      });
    return assistant
}

export async function createThread() {
    const thread = await openai.beta.threads.create();
    return thread
}

async function waitOnRun(run, thread){
    while (run.status === "queued" || run.status === "in_progress") {
        run = await openai.beta.threads.runs.retrieve(thread.id, run.id)
        await timer(200)
    }
    return run

}

export async function getAssistantResponse(input: string, assistant, thread) {
    console.log("getAssistantResponse", input);
    //Create message
    await openai.beta.threads.messages.create(
        thread.id,
        {
          role: "user",
          content: input
        }
      );


    let run = await openai.beta.threads.runs.create(
        thread.id,
        { 
            assistant_id: assistant.id,
        }
    );

    run = await waitOnRun(run, thread);
    console.log(run);


    const messages = await openai.beta.threads.messages.list(
        thread.id
    );

console.log(messages.data[0].content[0].text.value);

const response = messages.data[0].content[0].text.value;
    return response;
}