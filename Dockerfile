# FROM -> Imagem q quer baixar pra gerar o container
# Como saber quais imagens tem disponíveis para baixar: Acessar o site https://hub.docker.com/search e lá estará todas as imagens disponíveis
FROM node 

# WORKDIR -> Define o diretório onde você quer que salve as informações
WORKDIR /usr/app

# Server para copiar um arquivo para outro lugar
# package.json = arquivo para copiar | ./ destino para onde eu quero q ele vá
COPY package.json ./

# RUN -> baixa as dependências 
RUN npm install

# COPY -> copia tudo q foi baixado no npm install para a pasta raiz
# primeiro ponto server para selecionar tudo, o segundo ponto server para identificar o diretório q vc quer q salve
# neste caso é a pasta raiz
COPY . .

# EXPOSE -> Porta que estamos utilizando
EXPOSE 3000

CMD ["npm", "run", "dev"]