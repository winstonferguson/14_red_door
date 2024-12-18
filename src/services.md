---
layout: default
title: Services | 14 Red Door
page_class: services
---

<div class="page-width content">
  <% collections.services.resources.each do |service| %>
    <a class="door" href="<%= service.relative_url %>">
      <%= service.data.title %>
    </a>
  <% end %>
</div>
<div class="page-width teaser">
  <h3>what are you<br>interested in?</h3>
  <p>open a door<br>explore your options</p>
</div>





