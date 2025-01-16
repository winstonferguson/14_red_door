---
layout: default
page_class: home
---

<div class="content" data-controller="observer">
  <div class="topography">  
    <%= svg "/images/topography-left.svg" %>
    <%= svg "/images/topography-right.svg" %>
  </div>
  <div class="intro observe">
    <h1 class="title">Creative House</h1>
    <p class="copy">At 14 red door, we open doors to solutions<span class="span"> in visual and spatial practices.</span></p>
  </div>
  <div class="prelude">
    <div class="row observe">
      <div class="copy">
        <p>Inspired by forgotten memories, 14 Red Door explores limitless creativity in visual and spatial realms.</p>
        <p>We open doors to the unseen, undefined, and extraordinary.</p>
      </div>
      <div class="links">
        <a href="#services">
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="43" viewBox="0 0 38 43" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0004 0C20.3121 0 21.3751 1.06928 21.3751 2.38867V34.8439L33.9456 22.1997C34.8732 21.2665 36.3766 21.2665 37.3043 22.1997C38.2319 23.1328 38.2319 24.6449 37.3043 25.578L20.6797 42.3002C19.752 43.2333 18.2487 43.2333 17.321 42.3002L0.695747 25.578C-0.231916 24.6449 -0.231916 23.1328 0.695747 22.1997C1.62341 21.2665 3.12677 21.2665 4.05443 22.1997L16.6249 34.8439V2.38867C16.6249 1.06928 17.6879 0 18.9996 0H19.0004Z" fill="#504949"/>
          </svg>
        </a>
      </div>
    </div>
    <div class="row fields observe">
      <div class="copy">
        <p>14 red door is a creative house building in 3 fields:</p>
      </div>
      <div class="links">
        <% collections.services.resources.each do |service| %>
          <a class="link" href="<%= service.relative_url %>">
            <%= service.data.title %>
          </a>
        <% end %>
      </div>
    </div>
  </div>
  <div id="services" class="services observe"> 
    <h3 class="heading center">explore our services:</h3>
    <ul class="links">
      <% collections.services.resources.each do |service| %>
      <li class="link">
        <a href="<%= service.relative_url %>">
          <%= svg "/images/#{ service.data.image }" %>
        </a>
      </li>
    <% end %>
    </ul>
  </div>
  <div id="projects" class="projects observe"> 
    <h3 class="heading center">view some of our projects:</h3>
    <ul class="items">
      <% collections.projects.resources.sort_by{ |p| p.data.position }[0..1].each do |project| %>
      <li class="item" >
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
  <div class="cta">
    <a class="link" href="<%= relative_url '/contact' %>">
      ready to work?
      <span class="device">
        <%= svg "/images/link-arrow.svg" %>
      </span>
    </a>
  </div>
  
</div>