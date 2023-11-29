use std::io::Stdout;

use ratatui::{Terminal, prelude::CrosstermBackend};

use crate::{types::State, components::{get_pane_widget, get_app_vertical_layout}};

pub fn draw (terminal: &mut Terminal<CrosstermBackend<Stdout>>, application_state: &mut State) {
  let panes_count = application_state.panes.len();

  let _ = terminal.draw(|frame| {
    let main_layout = get_app_vertical_layout(&frame);

    for i in 0..panes_count {
      let pane_component = get_pane_widget(application_state, 0);

      match (pane_component, application_state.panes.get_mut(i)) {
        (Some(component), Some(pane)) => {
          frame.render_stateful_widget(component, main_layout[i], &mut pane.list_state)
        },
        _ => continue,
      }
    }
  });
}
