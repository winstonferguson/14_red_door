module Project
  # Gallery component for 14RD project pages
  class Gallery < Bridgetown::Component

    # Initializes the Gallery component
    # @param resource [Bridgetown::Resource] The current project resource
    # @param srcs [Array<String>] Source URLs of the image
    def initialize(resource:, srcs:)
      @resource = resource
      @srcs = srcs
    end
  end
end
