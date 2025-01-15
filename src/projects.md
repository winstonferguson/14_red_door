---
layout: default
title: Projects
page_class: projects
---

<div class="filter tablet" data-controller="filter">
  <h4 class="heading">categories</h4>
    <div class="input">
      <label>all</label>
      <input type="radio" class="radio" value="all" name="service" checked>
    </div>
  
  <% collections.services.resources.each do |service| %>
    <div class="input">
      <label><%= service.data.title %></label>
      <input type="radio" class="radio" value="<%= service.data.title.downcase %>" name="service" />
    </div>
  <% end %>
</div>

<div class="page-width content">
  <% collections.projects.resources.sort_by{ |p| p.data.position }.each do |project| %>
    <div class="card <%= project.data.status %>">
      <h3 class="title"><%= project.data.title %></h3>
      <div class="tags services">
        <%= render(Shared::Tags.new(site: site, resource: project, filter: 'service')) %>
      </div>
      <div class="tags categories tablet">
        <%= render(Shared::Tags.new(site: site, resource: project, filter: 'category', css_class: 'tablet')) %>
      </div>
      <p class="summary"><%= project.data.summary %></p>
      <% if project.data.status == 'complete' %>
        <a class="link"  href="<%= project.relative_url %>">
          <span class="tablet">view project</span>  
          <%= svg "/images/link-arrow.svg" %>
        </a>
      <% else %>
        <span class="coming-soon">coming soon</span>
      <% end %>
    </div>
  <% end %>
</div>
