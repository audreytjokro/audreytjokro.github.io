for file in images/*.{jpg,png}; do
    [ ! -f "tn/$file" ] && convert "$file"  -thumbnail 160x160 "tn/$file"
done

# command to run
# chmod +x _make_thumbnails.sh
# ./_make_thumbnails.sh