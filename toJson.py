import csv
import json
from pathlib import Path

def main():
    with open('quarantine-games-list.csv', 'r') as games:
        reader = csv.reader(games)
        header = next(reader)
        for row in reader:
            badchars = set('?:;`"()’.')
            file_name = row[2].lower().strip().replace(" ", "-")
            file_name = "".join( c for c in file_name if c not in badchars)
            game_category = row[0].strip()
            name = row[2].strip()
            sub_category = row[1].strip()
            min_players = row[3].strip()
            max_players = row[4].strip()
            min_age = row[5].strip()
            learning_curve = row[6].strip()
            popularity = row[7].strip()
            notes = row[16].strip()
            date_added = row[17].strip()
            urls = list(filter(None, row[8:16]))
            list_urls = "\n - ".join(urls)

            Path('src/data/games/').mkdir(parents=True, exist_ok=True)
            json_data = {
                'name': name,
                "slug": file_name,
                "game_category": game_category,
                "sub_category": sub_category,
                "min_players": min_players,
                "max_players": max_players,
                "min_age": min_age,
                "learning_curve": learning_curve,
                "popularity": popularity,
                "urls" : list(urls),
                "notes": notes,
                "date_added": date_added,
            }
            with open('src/data/games/{}.json'.format(file_name), 'w') as output:
                output.write(json.dumps(json_data, indent=4, sort_keys=True))


if __name__ == "__main__":
    main()
