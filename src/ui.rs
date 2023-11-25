use std::io::Stdout;

use ratatui::{Terminal, prelude::CrosstermBackend};

use crate::{types::State, components::{get_screen_widget, get_app_vertical_layout}};

pub fn draw (terminal: &mut Terminal<CrosstermBackend<Stdout>>, application_state: &mut State) {
  let screens_length = application_state.screens.len();

  let _ = terminal.draw(|frame| {
    let main_layout = get_app_vertical_layout(&frame);

    for i in 0..screens_length {
      let screen_component = get_screen_widget(application_state, 0);
      if let Some(component) = screen_component {
        frame.render_widget(component, main_layout[i])
      }
    }
  });
}
