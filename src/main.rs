pub mod types;
pub mod setup;
pub mod ui;
pub mod components;

use std::{io::stdout, time::Duration, path::Path};

use crossterm::{
  terminal::{EnterAlternateScreen, LeaveAlternateScreen, enable_raw_mode, disable_raw_mode}, event::{Event, KeyCode},
};
use ratatui::{
  Terminal,
  prelude::CrosstermBackend,
};
use setup::{prepare_terminal_exit, get_terminal};
use types::State;
use ui::draw;

fn main () -> std::io::Result<()> {
  let mut application_state = State::default();
  let mut terminal = get_terminal()?;

  application_state.load_root(Path::new("/"))?;

  loop {
    draw(&mut terminal, &mut application_state);


    // TODO: Implement keyboard events on a separate thread.
    if crossterm::event::poll(Duration::from_millis(10))? {
      if let Ok(event) = crossterm::event::read() {
        if event == Event::Key(KeyCode::Char('q').into()) {
          break
        }
      }
    }
  }


  prepare_terminal_exit()?;
  Ok(())
}

