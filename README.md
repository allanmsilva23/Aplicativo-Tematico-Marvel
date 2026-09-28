# 🦸 Atividade Prática 06 - Marvel Hero Archives (React Native)

Este repositório contém a entrega da **Atividade Prática 06 - Temático**, desenvolvida para a disciplina de **Programação para Dispositivos Móveis II** do professor **Jeferson de Souza Dias**, do curso de **Desenvolvimento de Software Multiplataforma** da **Fatec Itaquera**.

## 📌 Sobre o Projeto

O aplicativo **Marvel Hero Archives** é uma aplicação temática inspirada no universo Marvel, criada em **React Native** com **Expo** e **React Navigation**.

A proposta do projeto é apresentar diferentes personagens e núcleos dos Vingadores em telas separadas, com uma interface moderna inspirada em arquivos secretos de heróis. Cada tela possui identidade visual própria, imagem temática, informações do personagem, destaques e controles de navegação.

As quatro telas principais apresentam:

- **Iron Man / Tony Stark** — tecnologia, engenharia e armaduras.
- **Captain America / Steve Rogers** — liderança, estratégia e trabalho em equipe.
- **Black Panther / T'Challa** — Wakanda, vibranium, inovação e legado.
- **Avengers** — união dos heróis e encerramento da experiência.

---

## 🎯 Requisitos da Atividade e Como Foram Aplicados

| Requisito Solicitado | Como foi implementado |
| :--- | :--- |
| **Aplicação completa em React Native** | O projeto foi desenvolvido utilizando componentes nativos do React Native, como `SafeAreaView`, `ScrollView`, `View`, `Text`, `ImageBackground` e `TouchableOpacity`. |
| **No mínimo 4 telas** | Foram criadas quatro telas independentes: `Tela1.js`, `Tela2.js`, `Tela3.js` e `Tela4.js`. |
| **Utilizar React Navigation** | A navegação entre as telas foi implementada com `NavigationContainer` e Stack Navigator, permitindo avançar, voltar e retornar ao início da aplicação. |
| **Tema livre** | O tema escolhido foi o universo **Marvel**, com foco nos Vingadores e em personagens conhecidos da equipe. |
| **Dividir os assuntos em telas diferentes** | Cada tela apresenta um personagem ou núcleo específico do tema: Iron Man, Captain America, Black Panther e Avengers. |
| **Usar apenas um arquivo para os estilos** | Todo o estilo visual da aplicação foi centralizado no arquivo `src/styles.js`, evitando arquivos de estilo separados para cada tela. |
| **Arquivos das telas dentro da pasta `src`** | A estrutura do projeto mantém `Tela1.js`, `Tela2.js`, `Tela3.js`, `Tela4.js` e `styles.js` dentro da pasta `src`. |
| **Layout temático** | O aplicativo utiliza fundo escuro, cores associadas aos personagens, cards, indicadores de progresso, imagens em destaque, ícones e botões personalizados. |
| **Compatibilidade com diferentes plataformas** | O projeto utiliza componentes compatíveis com React Native e pode ser executado no **Web**, **Android** e **iOS** por meio do Expo. |

---

## 🗂️ Estrutura do Projeto

```text
Atividade-Pratica-06-Marvel/
│
├── assets/
│   ├── avengers.jpg
│   ├── captain.jpg
│   ├── ironman.jpg
│   ├── wakanda.jpg
│   └── snack-icon.png
│
├── src/
│   ├── styles.js
│   ├── Tela1.js
│   ├── Tela2.js
│   ├── Tela3.js
│   └── Tela4.js
│
├── App.js
├── package.json
└── README.md
```

---

## 🖥️ Telas da Aplicação

### 🔴 Tela 1 - Iron Man

A primeira tela apresenta **Tony Stark / Iron Man**, com destaque para tecnologia, engenharia, armadura e inteligência.

A identidade visual utiliza principalmente tons de vermelho, seguindo a estética do personagem.

### 🔵 Tela 2 - Captain America

A segunda tela apresenta **Steve Rogers / Captain America**, destacando liderança, estratégia, coragem e trabalho em equipe.

A interface utiliza detalhes em azul para diferenciar visualmente essa etapa do aplicativo.

### 🟣 Tela 3 - Black Panther

A terceira tela apresenta **T'Challa / Black Panther**, abordando Wakanda, vibranium, inovação tecnológica e legado.

O roxo é utilizado como cor de destaque para reforçar a identidade visual do personagem.

### 🟡 Tela 4 - Avengers

A quarta tela representa os **Vingadores como equipe**, finalizando a experiência do aplicativo.

Além das informações sobre o grupo, a tela possui uma opção para retornar ao início da navegação.

---

## 🧭 Navegação

A aplicação utiliza **React Navigation** para controlar a troca de telas.

O fluxo principal é:

```text
Tela1
  ↓
Tela2
  ↓
Tela3
  ↓
Tela4
  ↓
Voltar ao início
```

Também existem botões de retorno nas telas intermediárias, permitindo navegar para a tela anterior.

---

## 🎨 Identidade Visual

O layout foi desenvolvido com uma estética inspirada em sistemas tecnológicos e arquivos dos Vingadores.

Entre os principais elementos visuais estão:

- Fundo escuro em todas as telas.
- Cards com bordas e contrastes suaves.
- Imagens grandes dos personagens.
- Indicadores de progresso `01/04`, `02/04`, `03/04` e `04/04`.
- Cores específicas para cada personagem.
- Tags com características dos heróis.
- Ícones utilizando `@expo/vector-icons`.
- Botões personalizados para navegação.
- Design responsivo utilizando componentes do React Native.

---

## 🚀 Como Executar o Projeto

Você pode testar este projeto de duas maneiras: diretamente pelo **Snack Expo** ou localmente na sua máquina.

### Opção 1: Pelo Snack Expo

1. Acesse o [Snack Expo](https://snack.expo.dev/).
2. Crie um novo projeto.
3. No painel esquerdo, organize os arquivos seguindo esta estrutura:

```text
assets/
src/
  styles.js
  Tela1.js
  Tela2.js
  Tela3.js
  Tela4.js
App.js
package.json
README.md
```

4. Copie os códigos correspondentes para cada arquivo.
5. Faça o upload das imagens para a pasta `assets`.
6. Confira se os nomes das imagens são exatamente:

```text
ironman.jpg
captain.jpg
wakanda.jpg
avengers.jpg
```

7. Adicione ou confirme as dependências necessárias no projeto.
8. Selecione **Web**, **Android** ou **iOS** no painel de visualização.
9. Teste todos os botões de navegação antes de salvar.
10. Clique em **Save** e copie o link público do Snack para realizar a entrega.

### Opção 2: Localmente na sua Máquina

**Pré-requisitos:** Node.js instalado e ambiente Expo configurado.

1. Clone este repositório:

```bash
git clone https://github.com/allanmsilva23/Aplicativo-Tematico-Marvel.git
```

2. Acesse a pasta do projeto:

```bash
cd Aplicativo-Tematico-Marvel
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o projeto com Expo:

```bash
npx expo start
```

5. Utilize uma das opções exibidas pelo Expo para abrir o projeto no navegador, emulador ou dispositivo físico.

---

## 📦 Principais Dependências

```text
@react-navigation/native
@react-navigation/stack
react-native-screens
react-native-safe-area-context
@expo/vector-icons
expo-status-bar
```

---

## 🛠️ Tecnologias Utilizadas

- **React Native**
- **Expo (v54.0.0)**
- **JavaScript (ES6+)**
- **React Navigation**
- **Expo Vector Icons**
- **Snack Expo**