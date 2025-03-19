module Shared
  # Navbar component for 14RD
  class Navbar < Bridgetown::Component
    attr_reader :collections

    # Initializes the Navbar component
    # @param site [Bridgetown::Site] The site object
    # @param resource [Bridgetown::Resource] The resource object
    def initialize(site:, resource:)
      @site = site
      @resource = resource
      @collections = filtered_collections
    end

    private

    # Returns an array of collection names excluding those in `no_show`
    # @return [Array<String>] Sorted list of collection names
    def filtered_collections
      @site.collection_names.reject { |name| no_show.include?(name) }.sort
    end

    # Collections that should not be displayed in the navbar
    # @return [Array<String>] List of collection names to exclude
    def no_show
      %w[data pages posts]
    end
  end
end
