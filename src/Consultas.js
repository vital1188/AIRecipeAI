export async function Recipe(req, apiKey) {
//   console.log(req);
    // console.log(apiKey);
  const prompt = `Write a recipe based on these ingredients and instructions:${req.instructions} Ingredients:${req.ingredients}Instructions:`;
  // console.log(JSON.stringify({prompt}));
  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      prompt,
      temperature: 0.5,
      max_tokens: 4000,
      n: 1,
      stop: "\\n",
      model: "text-davinci-003",
      frequency_penalty: 0,
      presence_penalty: 0,
      logprobs: 10,
    }),
  });
  const data = await response.json();
  if (!response.ok) {
    console.log(data);
    throw new Error(data.error.message);
  }
  return data.choices[0].text;
}
