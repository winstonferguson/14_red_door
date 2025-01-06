---
layout: default
title: Services
page_class: services
---

<div class="content full-width">
  <% collections.services.resources.each do |service| %>
    <a class="door" href="<%= service.relative_url %>">
      <%= service.data.title %>
    </a>
  <% end %>
</div>
<div class="teaser full-width">
  <h3 class="heading tablet">what are you<br>interested in?</h3>
  <p class="copy">open a door:<br>explore your options</p>
</div>





