---
layout: page
title: Services
---

<div class="page-width">
  <% collections.services.resources.each do |service| %>
    <article class="service" data-controller="openable">
      <header class="grid--50-50">
        <div class="service--title">
          <%= service.data.title %>
        </div>
        <div  class="service--summary">
          <%= service.data.summary %>
          <span class="toggle clickable">[+]</span>
        </div>
      </header>
      <main class="service--content grid--50-50">
        <%= service %>
      </main>
    </article>    
  <% end %>
</div>
