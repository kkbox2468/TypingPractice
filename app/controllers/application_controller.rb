class ApplicationController < ActionController::Base
  helper_method :current_hero

  def current_hero
    return @current_hero if @current_hero.present?

    if session[:hero_id].present?
      @current_hero = Hero.find(session[:hero_id])
    else
      @current_hero = Hero.generate
      session[:hero_id] = @current_hero.id
      @current_hero
    end
  end
end
