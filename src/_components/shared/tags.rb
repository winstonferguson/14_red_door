class Shared::Tags < Bridgetown::Component
  def initialize(resource:, site:, filter: '', css_class: '')
    @resource, @site, @filter, @css_class = resource, site, filter, css_class
    @tags = tag_list
  end

  def category(tag)
    return 'service' if services.include?(tag.downcase)

    'category'
  end

  def tag_list
    @resource
      .data
      .tags
      .filter_map do |tag|
        next unless show? tag

        {
          name: tag,
          category: category(tag)
        }
      end
  end

  def services
    @site.collections.services.resources.map do |resource|
      resource.data.title.downcase
    end
  end

  def show?(tag)
    return @filter == category(tag) unless @filter.empty?

    true
  end
end
