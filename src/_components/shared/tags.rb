class Shared::Navbar < Bridgetown::Component
  def initialize(site:, resource:)
    @resource, @site = resource, @site
    @tags = resource.data.tags

    @collections = @site.collection_names
      .select { |name| name if no_show.exclude? name }
      .sort
  end

  def services
    ['data', 'pages', 'posts']
  end
end
