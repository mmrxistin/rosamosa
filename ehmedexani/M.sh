#   Bismillahir Rahmanir Rahim
#   Elhamdulillahi Rabbil Alamin
#   Esselatu vesselamu ala Resulillah
#   SubhanAllahi wa bihamdihi, SubhanAllahil Azim
#   La ilaha illAllah wahdahu la sharika lahu, lahul mulku wa lahul hamdu
# yuhyi ve yumit,biyadihil xayr  wa huwa 'ala kulli shay'in qadir
#   La ilaha illAllah wahdahu la sharika lahu, lahul mulku wa lahul hamdu
# yuhyi ve yumit,biyadihil xayr  wa huwa 'ala kulli shay'in qadir
#  La ilaha illAllah wahdahu la sharika lahu, lahul mulku wa lahul hamdu 
#  yuhyi ve yumit,biyadihil xayr wa huwa 'ala kulli shay'in qadir
#   Seyyidina Muhammeden Abduhu ve Resuluhu, Salli Allahu aleyhi ve sellem
# Allah u Ekber Velillahil Hamd
#!/usr/bin/env bash

set -e

echo "[1/5] Sistem güncelleniyor..."
sudo apt update

echo "[2/5] Gerekli paketler kuruluyor..."
sudo apt install -y curl wget git build-essential ca-certificates

echo "[3/5] NVM kuruluyor..."
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

export NVM_DIR="$HOME/.nvm"

if [ -s "$NVM_DIR/nvm.sh" ]; then
    . "$NVM_DIR/nvm.sh"
else
    echo "NVM yüklenemedi!"
    exit 1
fi

echo "[4/5] Node.js 22 LTS kuruluyor..."
nvm install 22
nvm alias default 22
nvm use 22

echo "[5/5] Kurulum doğrulanıyor..."
echo "Node Version : $(node -v)"
echo "NPM Version  : $(npm -v)"

echo ""
echo "Kurulum tamamlandı."
echo "Yeni terminal açtığında Node.js hazır olacaktır."