---
layout: page
title: Services
---

<div class="grid--50-50 page-width">
  <% collections.services.resources.each do |service| %>
    <div class="service--title">
      <%= service.data.title %>
    </div>
    <div  class="service--summary">
      <%= service.data.summary %>
      <span class="clickable">[+]</span>
    </div>
    
  <% end %>
</div>
