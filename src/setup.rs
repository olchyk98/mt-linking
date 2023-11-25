use std::io::{self, stdout, Stdout};
use crossterm::terminal::{enable_raw_mode, EnterAlternateScreen, LeaveAlternateScreen, disable_raw_mode};
use ratatui::{Terminal, prelude::CrosstermBackend};

pub fn get_terminal () -> io::Result<Terminal<CrosstermBackend<Stdout>>> {
  enable_raw_mode()?;
  crossterm::execute!(stdout(), EnterAlternateScreen)?;
  Terminal::new(CrosstermBackend::new(stdout()))
}

pub fn prepare_terminal_exit () -> io::Result<()> {
  disable_raw_mode()?;
  crossterm::execute!(stdout(), LeaveAlternateScreen)?;
  Ok(())
}
