module Shared
  # Tags component for 14RD
  class Tags < Bridgetown::Component
    attr_reader :tags

    # Initializes the Tags component
    # @param resource [Bridgetown::Resource] The current resource
    # @param site [Bridgetown::Site] The site object
    # @param filter [String] Filter to limit displayed tags
    # @param css_class [String] CSS class for styling
    def initialize(resource:, site:, filter: '', css_class: '')
      @resource = resource
      @site = site
      @filter = filter
      @css_class = css_class
      @tags = generate_tag_list
    end

    private

    # Determines the category of a tag
    # @param tag [String] The tag name
    # @return [String] Category type ('service' or 'category')
    def category(tag)
      return 'service' if services.include?(tag.downcase)
      'category'
    end

    # Generates a list of tags with their categories
    # @return [Array<Hash>] Array of tag hashes with name and category
    def generate_tag_list
      return [] unless @resource.data.tags

      @resource.data.tags.filter_map do |tag|
        next unless show?(tag)

        { name: tag, category: category(tag) }
      end
    end

    # Retrieves the list of service names
    # @return [Array<String>] Array of service names in lowercase
    def services
      @site.collections.services.resources.map { |resource| resource.data.title.downcase }
    end

    # Determines whether a tag should be displayed based on the filter
    # @param tag [String] The tag name
    # @return [Boolean] True if the tag should be shown
    def show?(tag)
      return true if @filter.empty?
      @filter == category(tag)
    end
  end
end
