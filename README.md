Sure! Here's the updated `README.md` with the change:

````markdown
# World University Rankings Project

This project displays the global university rankings for various universities. It allows users to view detailed information about universities, including their name, country, city, and global rank.

## Project Setup

Follow the steps below to run the project locally:

### 1. Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone <repository-url>
```
````

### 2. Install Dependencies

Navigate to the `backend` directory:

```bash
cd backend
```

Ensure that you have Python installed on your machine. If not, download and install Python from [here](https://www.python.org/downloads/).

Install the necessary dependencies by running:

```bash
pip install flask pandas
```

### 3. Run the Backend Server

In the `backend` directory, start the server by running:

```bash
python backend.py
```

This will start the server and expose the data that will be used by the front-end (HTML) to display the university rankings.

### 4. Run the Frontend (HTML)

Once the server is running, open the `index.html` file in your browser. This file will fetch data from the backend server and display the university rankings.

```bash
open index.html
```

Alternatively, you can open the `index.html` file manually in your browser.

## Project Structure

Here’s an overview of the project structure:

```
- backend/
    ├── backend.py            # Python server to serve data
    ├── universities.csv      # CSV file containing university data (university, country, city, rank)
- index.html                  # Frontend HTML to display the data
```

### Backend (`backend.py`)

The `backend.py` file is a simple Python server that loads the university data from a CSV file (`universities.csv`) and serves it in a JSON format. This data is fetched by the frontend (`index.html`) and displayed in a table.

The `backend.py` uses the `pandas` library to read the CSV file and returns the data as a response when the server is started.

### Frontend (`index.html`)

The `index.html` file is a basic webpage that fetches the university ranking data from the server. It uses JavaScript to fetch the data and display it in an HTML table.

The table will list the following columns:

- **University**: Name of the university.
- **Country**: The country where the university is located.
- **City**: The city where the university is located.
- **Global Rank**: The global ranking of the university.

## How It Works

1. The server (`backend.py`) reads the `universities.csv` file to load all the university data.
2. It serves this data in JSON format when you run the server.
3. The frontend (`index.html`) fetches this data via an API request to display it in a user-friendly table.

## Contributing

Feel free to contribute to the project by submitting issues or pull requests. Make sure to fork the repository before making any changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

### Key Changes:
- **Install Dependencies**: Added the line to install Flask and Pandas with `pip install flask pandas` as there is no `requirements.txt`.
```
