---
layout: default
title: Success
page_class: success
---

<div class="page-width content">
  <div class="intro">
    <div class="title">thanks for submitting!</div>
    <div class="title">we will get back to you soon us</div>
  </div>
  <div id="projects" class="projects observe"> 
    <h3 class="heading">meanwhile come back to some of or projects:</h3>
    <ul class="items">
      <% collections.projects.resources.sort_by{ |p| p.data.position }[0..1].each do |project| %>
      <li class="item">
        <a class="link" href="<%= project.relative_url %>">
          <span class="title"><%= project.data.title %></span>
          <div class="image" style="background-image: url('<%= relative_url responsive_image_path(project.data.image_directory + '/feature.png', width: 640) %>')">
          </div>
          <span class="summary"><%= project.data.summary %></span>
        </a>
      </li>
    <% end %>
      <li class="item" >
        <a class="link" href="<%= relative_url '/projects' %>">
          view more
        </a>
      </li>
    </ul>
  </div>
</div>