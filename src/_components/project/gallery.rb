class Project::Gallery < Bridgetown::Component
  def initialize(resource:, srcs:)
    @resource, @srcs = resource, srcs


  end
end
