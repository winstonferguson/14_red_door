class Shared::Image < Bridgetown::Component
  def initialize(alt: '', src: nil)
    @alt, @src = alt, src
  end
end
