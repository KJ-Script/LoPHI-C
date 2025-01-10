from langchain_ollama import OllamaLLM, ChatOllama


llm = OllamaLLM(model="llama3.2:1b")

# llm.invoke("who built you?")
# response = llm.invoke("who built you")
# print(response)

for chunk in llm.stream("The first man on the moon was ..."):
    print(chunk, end="", flush=True)



