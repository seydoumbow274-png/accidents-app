#!/bin/bash
# Script pour démarrer Flask et Ngrok et afficher l'URL publique en temps réel

# Activer le virtual environment
source venv/bin/activate

# Fermer tous les ngrok existants
pkill -f ngrok 2>/dev/null

# Fermer Flask sur le port 5000 s'il y en a
PID=$(lsof -t -i:5000)
if [ ! -z "$PID" ]; then
    kill -9 $PID
fi

# Démarrer Flask en arrière-plan
echo "[INFO] Démarrage de Flask..."
nohup python app.py > flask.log 2>&1 &

# Démarrer ngrok en arrière-plan
echo "[INFO] Démarrage de ngrok..."
nohup /home/user/Téléchargements/ngrok-v3-stable-linux-amd64/ngrok http 5000 > ngrok.log 2>&1 &

# Boucle pour vérifier et afficher l'URL publique toutes les 2 secondes
echo "[INFO] Attente de l'URL publique de ngrok..."
LAST_URL=""
while true; do
    URL=$(curl -s http://127.0.0.1:4040/api/tunnels | grep -o '"public_url":"https[^"]*' | cut -d'"' -f4)
    if [ ! -z "$URL" ] && [ "$URL" != "$LAST_URL" ]; then
        echo "[INFO] ngrok est actif : $URL"
        LAST_URL="$URL"
    fi
    sleep 2
done
