module Shared
  # Image component for 14RD
  class Image < Bridgetown::Component
    attr_reader :alt, :src, :sizes

    # Initializes the Image component
    # @param alt [String] Alternative text for the image
    # @param src [String, nil] Source URL of the image
    # @param sizes [Array<String>] Responsive image sizes
    def initialize(alt: '', src: nil, sizes: [])
      @alt = alt
      @src = src
      @sizes = sizes
    end
  end
end
