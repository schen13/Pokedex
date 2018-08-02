json.array! @parties do |party|
  json.name party.name
  json.set! :guests do
    json.array! party.guests do |guest|
      json.name guest.name
      json.set! :gifts do
        json.array! guest.gifts do |gift|
          json.title gift.title
          json.description gift.description
        end
      end
    end
  end
end
