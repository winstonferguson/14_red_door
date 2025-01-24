class Shared::Image < Bridgetown::Component
  def initialize(alt: '', src: nil, sizes: [])
    @alt, @src, @sizes = alt, src, sizes
  end
end
