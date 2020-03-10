class PlayerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :team, :position, :card_front, :card_back
end
