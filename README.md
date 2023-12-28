# Pokémon Table Project

This project is a simple React application that fetches Pokémon data from a JSON file and renders a table. The table includes functionality for searching by Pokémon name, searching by power threshold, and pagination. Additionally, it calculates the power of each Pokémon based on specific attributes.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Lilicod/pokemon-table-project.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd pokemon-table-project
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

## Usage

### Running the Development Server

To run the development server and preview the Pokémon table:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure

The project follows a simple structure:

```
src/
|-- components/
|   |-- PokemonTable/
|       |-- PokemonTable.js
|       |-- PokemonTableRow.js
|       |-- PokemonTableHeader.js
|       |-- PokemonTablePagination.js
|   |-- Elements/
|       |-- TextInput.js
|-- utils/
|   |-- pokemonUtils.js
|-- styles/
|   |-- pokemonTable.css
```

The components folder contains React components,The `Elements` folder contains smaller, reusable elements/components that are used within the main components. In this case, it includes a `TextInput.js` element. the utils folder includes utility functions, and the styles folder holds CSS styles.

## Technologies Used

Material-UI - React components for faster and easier web development
React Icons - Icon library for React applications